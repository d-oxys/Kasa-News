export interface UserData {
  name: string;
  avatarUrl: string;
}

export interface dialogProps {
  title: string;
  subtitle: string;
  submitText: string;
  cancelText: string;
  onSubmit: (e: any) => Promise<void>;
  onCancel: () => void;
  onClose: () => void;
  isLoading: boolean;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface Headline {
  title: string;
  urlToImage: string;
  description: string;
}
