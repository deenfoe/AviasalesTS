interface AirlineLogoProps {
  company: string
}

function AirlineLogo({ company }: AirlineLogoProps) {
  const logoUrl = `//pics.avs.io/99/36/${company}.png`
  return <img src={logoUrl} alt="airline logo" width={99} height={36} style={{ display: 'block' }} />
}

export default AirlineLogo
