import styled from '@emotion/styled'

const setBgColor =  props => {
    switch (props.children) {        
        case 'good':
            return "darkseagreen";
        case 'neutral':
            return "gold";
        case 'bad':
            return "palevioletred";
        default:
            return "grey";
    }    
};

export const Button = styled.button`
width: 150px;
padding: 10px;
margin: 10px;
font-weight: 700;
text-transform: uppercase;
border: none;
color: white;
background-color: ${setBgColor};
`