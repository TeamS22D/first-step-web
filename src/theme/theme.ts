export interface Theme {
  mainColor: string;
  textGray: string;
}


export const lightTheme: Theme = {
  mainColor: '#0ACF83',
  textGray: '#A3A3A3',
};

export type ThemeType = Theme;