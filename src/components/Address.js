import React from "react"
import styled from "styled-components"
import { address } from "../data/contact"
import { FiPhone } from "react-icons/fi"
import { MdPhoneIphone } from "react-icons/md"

const PhoneButtonComponent = ({ phone, mobile }) => {
  const icon = mobile ? (
    <MdPhoneIphone style={{ fontSize: 20, marginRight: 10 }} />
  ) : (
    <FiPhone style={{ fontSize: 20, marginRight: 10 }} />
  )
  return (
    <PhoneButton href={`tel:${phone}`}>
      {icon} {phone}
    </PhoneButton>
  )
}

const Address = props => {
  return (
    <Container>
      <PhoneButtonsWrapper>
        {address.phones.landlinePhones.map((phone, index) => (
          <PhoneButtonComponent phone={phone} key={`landlinePhone-${index}`} />
        ))}
        {address.phones.mobiles.map((phone, index) => (
          <PhoneButtonComponent
            phone={phone}
            mobile
            key={`mobileButton-${index}`}
          />
        ))}
      </PhoneButtonsWrapper>
      <AddressSection>
        <AddressField style={{ fontSize: "clamp(1.6rem, 1.8vw, 1.8rem)" }}>
          {address.company}
        </AddressField>
        <AddressField>
          {address.street} {address.buildingNo}
        </AddressField>
        <AddressField>
          {address.zip} {address.city}
        </AddressField>
        <AddressField>NIP: {address.nip}</AddressField>
      </AddressSection>
    </Container>
  )
}

export default Address

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f26a2e;
  padding: 1rem calc((100vw - 1300px) / 2);
`
const AddressSection = styled.address``

const AddressField = styled.p`
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  line-height: 2.4rem;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  font-style: normal;
  color: #fff;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`

const PhoneButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`
const PhoneButton = styled.a`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 10px 32px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-bottom: 1rem;

  &:hover {
    width: 240px;
    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.3);
  }
`
