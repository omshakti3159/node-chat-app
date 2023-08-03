const users: { [key: string]: string } = {};

export const onSocketConnection = (socket: any) => {
  console.log("Socket is connected!!");
  socket.on("create-new-room", (name: string, particaipants: string[]) => {});

  socket.on("new-join-chat", (username: string) => {
    users[socket.id as string] = username;
    socket.broadcast.emit("chat-joined", username);
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("chat-left", users[socket.id as string]);
    delete users[socket.id as string];
  });

  socket.on(
    "send-message",
    ({ message, name }: { message: string; name: string }) => {
      socket.broadcast.emit("recieve", { message, name });
    }
  );
};
