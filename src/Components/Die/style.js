import styled from 'styled-components';
 

export const Container = styled.div`
text-align: center;

`
export const Dies = styled.div`
font-size: 10em;
color:lightseagreen;
padding: 0.12em;

`
export const Wobble = styled.div`
animation-name: wobble;
animation-duration: 1s;
@keyframes wobble {
    from {
        transform: translate3d(0,0,0);
    }
    15%{
        transform: translate3d(-25%, 0,0) rotate3d(0,0,1,-5deg);
    }
    30%{
        transform: translate3d(20%,0,0) rotate3d(0,0,1,-3deg);
    }
    45%{
        transform: translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);
    }
    60%{
        transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg);
    }
    75%{
        transform: translate3d(-5%,0,0) rotate3d(0,0,0,-1deg);
    }
    to{
        transform: translate3d(0,0,0);
    }
}
`