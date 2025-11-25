export interface Theme {
  mainColor: string;
  mainColor2: string;
  textSecondary: string;
  textPrimary: string;
  sidebar: string;
  bgPrimary: string;
  shadowLight: string;
  backgroundLight: string;
  textThird: string;
}


export const lightTheme: Theme = {
  mainColor: '#0ACF83',
  mainColor2: "#3FB98A",
  textSecondary: '#A3A3A3',
  textPrimary: '#000000',
  sidebar: '#2B2B2B',
  bgPrimary: '#fff',
  shadowLight: '2px 2px 8px 0 rgba(0, 0, 0, 0.08);',
  backgroundLight: '#F2F2F2',
  textThird: '#6A6A6A',
};

export type ThemeType = Theme;