import styled from "styled-components"

const CardStyle = styled.div`
    width: 100%;
    height: 100px;
    font-size: 12px;
    display: flex;
    background-color: white;
    border-radius: 8px;
    justify-self: center;

    .cardContent {
        width: 100%;
        padding: 5px;
    }

    .status {
        width: 8px;
        border-radius: 8px 0 0 8px;
    }

    .isEnabled {
        background-color: ${({isEnabled}) => isEnabled ? '#67b769' : '#fe2a06'};
    }

    .response {
        background-color: #6893B9;
    }

    .cardHeader {
        display: flex;
        justify-content: space-between;
        height: 25%;
    }

    .statusCard {
       border-radius: 16px;
       padding: 3px;
    }

    .cardBody {
        justify-content: center;
        height: 75%;
        align-items: center;
        display: flex;
    }

`

export {
    CardStyle,
}

