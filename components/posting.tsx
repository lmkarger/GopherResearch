export const Postings = ({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <Post>
            <PostTitle>{item.title}</PostTitle>
            <PostDescription>{item.description}</PostDescription>
          </Post>
        </div>
      ))}
    </div>
  );
};

export const Post = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="relative z-50 hover:bg-gray-200 border-t-2 border-[#BBB] text-left max-h-[40rem] overflow-y-auto">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const PostTitle = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className="text-xl font-bold text-[#7A0019]">
      {children}
    </h4>
  );
};
export const PostDescription = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p>
      {children}
    </p>
  );
};
