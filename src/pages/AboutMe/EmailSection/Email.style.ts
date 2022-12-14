import { Box } from "@mui/system";
import styled from "styled-components";

export const EmailContainer = styled(Box)`
    @keyframes hoverToRight {
        from {
            opacity: 0;
            margin-left: -10rem;
        }
        to {
            opacity: 1;
            margin-left: 0;
        }
    }

    display: flex;
    flex-direction: column;

    padding: 2rem;

    gap: 2rem;
        
    border-radius: 3rem;

    animation: hologramBeamSection 10ms linear infinite;

    label {
        font-size: 2rem;
    }

     p {
        font-size: 2rem;
    }

    .email-section-messages {
        position: absolute;
        bottom: 9.5rem;
        font-size: 2rem;
        color: #88c4c9;
        text-shadow: 0 0 10px #88c4c9;  
        
        animation: hoverToRight 1000ms;
        transition: 400ms;
    }

    .email-section-title {
        font-size: 3rem;
        color: #88c4c9;
        text-shadow: 0 0 10px #88c4c9;
    }

    .email-section-info-main {
        position: relative
        ;
        display: flex;
        flex-direction: column;

        justify-content: center;

        gap: 3rem;
    }

    .email-input-container, .name-input-container, .subject-input-container {
        display: flex;
        flex-direction: column;

        gap: 1rem;
    }

    .email-input-container input, .name-input-container input, .subject-input-container input {
        width: 50rem;
        height: 5rem;

        font-size: 2rem;
    }

    .email-content-input-container {
        display: flex;
        flex-direction: column;

        gap: 1rem;
    }

    .email-content-input-container textarea {
        width: 50rem;
        height: 15rem;

        font-size: 2rem;

        margin-bottom: 3rem;
    }

    .email-buttons-container {
        display: flex;

        gap: 10rem;
    }

    .email-buttons-container button {
        font-size: 2rem;

        margin-bottom: 4rem;
    }

    .email-return-button {
        background-color: #26656900;
        color: #88c4c9;
    }

    .email-send-button {
        background-color: #06eeffff;
        color: #2c4c4eff;
    }
`