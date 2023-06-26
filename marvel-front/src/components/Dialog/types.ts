export interface IDialogStyles {
    width?: string;
    height?: string;
}

export interface IDialog extends IDialogStyles {
    handleCloseModal: () => void;
    children: React.ReactNode;
  }