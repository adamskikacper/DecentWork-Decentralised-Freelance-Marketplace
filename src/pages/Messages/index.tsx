import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardSection } from "@/components";
import { Breadcrumbs, Button, Avatar, AvatarFallback, LoadingScreen } from "@/shared/ui";
import { getConversations, type Conversation } from "@/shared/services/message.service";

export const Messages: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (error) {
        console.error("Failed to fetch conversations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Messages" }]}
      />
      <DashboardSection title="Messages" description="Your conversations">
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {conversation.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{conversation.name}</h3>
                    {conversation.unread && (
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {conversation.lastMessage}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {conversation.timestamp}
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to={`/dashboard/messages/${conversation.id}`}>
                  View Chat
                </Link>
              </Button>
            </div>
          ))}
          {conversations.length === 0 && (
            <div className="p-6 text-center text-muted-foreground">
              <p>No conversations yet. Start by messaging a freelancer!</p>
            </div>
          )}
        </div>
      </DashboardSection>
    </div>
  );
};