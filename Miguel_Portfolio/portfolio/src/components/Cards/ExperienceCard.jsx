import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
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
    align-items: center; /* Align items vertically center */
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

const Role = styled.div`
    font-size: 20px; /* Increased font size */
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 16px; /* Adjusted for smaller screens */
    }
`;

const Company = styled.div`
    font-size: 16px; /* Increased font size */
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 14px; /* Adjusted for smaller screens */
    }
`;

const Date = styled.div`
    font-size: 14px; /* Increased font size */
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 12px; /* Adjusted for smaller screens */
    }
`;

const Description = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Skills = styled.div`
    display: flex;
    gap: 12px;
    margin-top: -10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.image} alt={`${experience.company} logo`} />
                <Body>
                    <Role>{experience.company}</Role>
                    <Date>{experience.duration}</Date>
                </Body>
            </Top>
            <Description>
                {experience.desc}
            </Description>
            {experience.skills && (
                <Skills>
                    <b>Skills:</b>
                    <ItemWrapper>
                        {experience.skills.map((skill, index) => (
                            <Skill key={index}>• {skill}</Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
            )}
        </Card>
    );
};

export default ExperienceCard;
