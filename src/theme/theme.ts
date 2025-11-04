export interface Theme {
  mainColor: string;
  textSecondary: string;
  textPrimary: string;
  sidebar: string;
}


export const lightTheme: Theme = {
  mainColor: '#0ACF83',
  textSecondary: '#A3A3A3',
  textPrimary: '#000000',
  sidebar: '#2B2B2B',
};

export type ThemeType = Theme;