import styled from 'styled-components'

export const Body = styled.div`
    width: 68%;
    height: 110%;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    height: 770px;
    color: black;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #F2F2F2;
    border-radius: 10px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Topbar = styled.div`
    width: 100%;
    height: 57px;
    display: flex;
    padding-left: 17px;
    align-items: center;
    background: #EAF8F2;

    color: #60AD8F;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -1px;
`

export const Textarea = styled.div`
    width: 90%;
    margin: 0 auto;
    border-bottom: 2px solid #F2F2F2;
    display: flex;
    align-items: center;
    padding-left: 17px;
    gap: 24px;
`

export const TopTextarea = styled(Textarea)`
    height: 57px;
`

export const BottomTextarea = styled(Textarea)`
    height: 597px;
    align-items: flex-start;
    padding-top: 40px;
`

export const Title = styled.span`
    color: #404040;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -1px;
`

export const Content = styled.textarea`
    width: 100%;
    height: 57px;         
    line-height: 57px;    
    border: none;
    outline: none;
    resize: none;
    background: transparent;
    font-size: 16px;
    color: #777;
    padding: 0;          
`

export const TopContent = styled.div`
    flex: 1;                 
    display: flex;             
    align-items: center;       
`
