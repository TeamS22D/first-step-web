import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import Layout from './components/Layout/Layout'
import { lightTheme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App