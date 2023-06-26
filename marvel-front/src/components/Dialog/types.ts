export interface IDialogStyles {
    width?: string;
    height?: string;
}

export interface IDialog extends IDialogStyles {
    children: React.ReactNode;
  }