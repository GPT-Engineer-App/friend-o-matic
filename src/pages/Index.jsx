import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const fetchUsers = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=20');
  return response.data.results;
};

const Index = () => {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (isError) return <div className="flex justify-center items-center h-screen">Error fetching users</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Friends List</h1>
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-6">
          <ScrollArea className="h-[70vh]">
            {users.map((user) => (
              <div key={user.login.uuid} className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
                  <AvatarFallback>{user.name.first[0]}{user.name.last[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">{user.name.first} {user.name.last}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
