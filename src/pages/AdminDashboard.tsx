import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { format } from 'date-fns';

interface Activity {
  id?: number;
  title: string;
  description: string;
  image: string | File | null;
  date: string;
  location: string;
  participants: number;
  category: string;
}

const AdminDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newActivity, setNewActivity] = useState<Activity>({
    title: '',
    description: '',
    image: null,
    date: '',
    location: '',
    participants: 0,
    category: '',
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/activities');
      if (!response.ok) throw new Error('Failed to fetch activities');
      const data = await response.json();
      setActivities(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/admin/login');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewActivity((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();

    for (const key in newActivity) {
      if (newActivity[key as keyof Activity] !== null) {
        formData.append(key, newActivity[key as keyof Activity] as string | Blob);
      }
    }

    try {
      let response;
      if (editingActivity) {
        response = await fetch(`http://localhost:5000/api/activities/${editingActivity.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        });
      } else {
        response = await fetch('http://localhost:5000/api/activities', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        });
      }

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to save activity');
      }

      toast({
        title: "Success",
        description: editingActivity ? "Activity updated successfully." : "Activity created successfully.",
      });
      setIsDialogOpen(false);
      setEditingActivity(null);
      setNewActivity({
        title: '', description: '', image: null, date: '', location: '', participants: 0, category: ''
      });
      fetchActivities();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    setNewActivity({ ...activity, image: null, date: format(new Date(activity.date), 'yyyy-MM-dd') }); // Pre-fill form, clear image for new upload
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this activity?')) return;

    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/activities/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to delete activity');
      }

      toast({
        title: "Success",
        description: "Activity deleted successfully.",
      });
      fetchActivities();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </div>

        <Card className="mb-8">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Manage Activities</CardTitle>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => {
                  setEditingActivity(null);
                  setNewActivity({
                    title: '', description: '', image: null, date: '', location: '', participants: 0, category: ''
                  });
                }}>Add New Activity</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{editingActivity ? 'Edit Activity' : 'Add New Activity'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <Input name="title" value={newActivity.title} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <Textarea name="description" value={newActivity.description} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image</label>
                    <Input type="file" name="image" onChange={handleFileChange} />
                    {editingActivity?.image && typeof editingActivity.image === 'string' && !newActivity.image && (
                      <p className="text-sm text-muted-foreground mt-1">Current image: <a href={`http://localhost:5000${editingActivity.image}`} target="_blank" rel="noopener noreferrer">{editingActivity.image.split('/').pop()}</a></p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                    <Input type="date" name="date" value={newActivity.date} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                    <Input name="location" value={newActivity.location} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Participants</label>
                    <Input type="number" name="participants" value={newActivity.participants} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <Input name="category" value={newActivity.category} onChange={handleInputChange} required />
                  </div>
                  <DialogFooter>
                    <Button type="submit">{editingActivity ? 'Update Activity' : 'Create Activity'}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.title}</TableCell>
                    <TableCell>{activity.date ? format(new Date(activity.date), 'dd MMMM yyyy') : 'N/A'}</TableCell>
                    <TableCell>{activity.location}</TableCell>
                    <TableCell>{activity.category}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEdit(activity)}>Edit</Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(activity.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;