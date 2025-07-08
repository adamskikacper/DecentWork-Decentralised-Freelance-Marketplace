export interface Conversation {
 id: string;
 name: string;
 lastMessage: string;
 timestamp: string;
 unread: boolean;
 avatar: string;
}

export interface Message {
 id: string;
 senderId: string;
 receiverId: string;
 content: string;
 timestamp: string;
 isRead: boolean;
}

export const getConversations = async (): Promise<Conversation[]> => {
 return [
  {
   id: "alex123",
   name: "Alex K.",
   lastMessage: "Thanks for the feedback on the smart contract!",
   timestamp: "2 hours ago",
   unread: true,
   avatar: "/placeholder.svg",
  },
  {
   id: "maria123",
   name: "Maria S.",
   lastMessage: "The audit report is ready for review.",
   timestamp: "1 day ago",
   unread: false,
   avatar: "/placeholder.svg",
  },
  {
   id: "david123",
   name: "David C.",
   lastMessage: "I'll have the DeFi interface ready by tomorrow.",
   timestamp: "3 days ago",
   unread: false,
   avatar: "/placeholder.svg",
  },
 ];
};

export const getMessageThread = async (userId: string): Promise<Message[]> => {
 const mockMessages: Record<string, Message[]> = {
  alex123: [
   {
    id: "msg1",
    senderId: "alex123",
    receiverId: "current-user",
    content: "Hi! I wanted to discuss the smart contract requirements.",
    timestamp: "2 days ago",
    isRead: true,
   },
   {
    id: "msg2",
    senderId: "current-user",
    receiverId: "alex123",
    content:
     "Sure! I've reviewed the initial proposal. The architecture looks solid.",
    timestamp: "2 days ago",
    isRead: true,
   },
   {
    id: "msg3",
    senderId: "alex123",
    receiverId: "current-user",
    content: "Thanks for the feedback on the smart contract!",
    timestamp: "2 hours ago",
    isRead: false,
   },
  ],
  maria123: [
   {
    id: "msg4",
    senderId: "maria123",
    receiverId: "current-user",
    content:
     "I've started the security audit for your NFT marketplace contracts.",
    timestamp: "2 days ago",
    isRead: true,
   },
   {
    id: "msg5",
    senderId: "current-user",
    receiverId: "maria123",
    content: "Great! Please focus on the minting and transfer functions.",
    timestamp: "2 days ago",
    isRead: true,
   },
   {
    id: "msg6",
    senderId: "maria123",
    receiverId: "current-user",
    content: "The audit report is ready for review.",
    timestamp: "1 day ago",
    isRead: true,
   },
  ],
  david123: [
   {
    id: "msg7",
    senderId: "david123",
    receiverId: "current-user",
    content: "I'm working on the DeFi interface redesign as discussed.",
    timestamp: "4 days ago",
    isRead: true,
   },
   {
    id: "msg8",
    senderId: "current-user",
    receiverId: "david123",
    content: "Perfect! Please make sure to include the yield farming section.",
    timestamp: "4 days ago",
    isRead: true,
   },
   {
    id: "msg9",
    senderId: "david123",
    receiverId: "current-user",
    content: "I'll have the DeFi interface ready by tomorrow.",
    timestamp: "3 days ago",
    isRead: true,
   },
  ],
 };

 return mockMessages[userId] || [];
};

export const sendMessage = async (
 receiverId: string,
 content: string
): Promise<Message> => {
 const newMessage: Message = {
  id: `msg-${Date.now()}`,
  senderId: "current-user",
  receiverId,
  content,
  timestamp: "just now",
  isRead: false,
 };

 return newMessage;
};
