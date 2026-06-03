type EmptyStateProps = {
  message: string;
};

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
      {message}
    </div>
  );
}
