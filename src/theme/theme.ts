export interface Theme {
  mainColor: string;
  mainColor2: string;
  textSecondary: string;
  textPrimary: string;
  sidebar: string;
  bgPrimary: string;
}


export const lightTheme: Theme = {
  mainColor: '#0ACF83',
  mainColor2: "#3FB98A",
  textSecondary: '#A3A3A3',
  textPrimary: '#000000',
  sidebar: '#2B2B2B',
  bgPrimary: '#fff',
};

export type ThemeType = Theme;