import styled from 'styled-components'

export const Button = styled.button`
    text-transform: uppercase;
    outline: none;
    width: 200px;
    margin-left: 16px;
    padding: 8px 16px;
    background: #1E56AA;
    color: white;
    border-radius: 100px;
    cursor: pointer;
    ${props => props.block ? 'display: block; width: 100%;' : ''}
    ${props => props.register ? 'background: green;' : ''}

    &:hover{
        transform: translateY(-3px);
        box-shadow:  0 10px 20px rgba(0,0,0,.2);
    }

    &:active {
    transform: translateY(-1px);
    box-shadow:  0 5px 10px rgba(0,0,0,.2);
}
`