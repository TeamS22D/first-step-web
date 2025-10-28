export interface Theme {
  mainColor: string;
  textGray: string;
  sidebar: string;
}


export const lightTheme: Theme = {
  mainColor: '#0ACF83',
  textGray: '#A3A3A3',
  sidebar: '#2B2B2B',
};

export type ThemeType = Theme;