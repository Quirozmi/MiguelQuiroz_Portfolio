import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column; 
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Location = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const GraduationDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.image} alt={`${education.institution} logo`} />
                <Body>
                    <Name>{education.institution}</Name>
                    <Location>{education.location}</Location>
                    <Degree>{education.degree}</Degree>
                    <GraduationDate>{education.expectedGraduation || education.graduationDate}</GraduationDate>
                </Body>
            </Top>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    );
};

export default EducationCard;
