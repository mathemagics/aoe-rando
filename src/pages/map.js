import * as React from "react"
import { Link } from "gatsby"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Layout from "../components/layout"
import MapImage from "../components/mapImage"
import Seo from "../components/seo"

import { mapData, mapTypes } from "../data/mapData"

const MapPage = () => {
  const [randomMap, setRandomMap] = React.useState(null);

  const [selectedTypes, setSelectedTypes] = React.useState({
    [mapTypes.land]: true,
    [mapTypes.water]: true,
    [mapTypes.hybrid]: true,
  });


  const handleChange = (event) => {
    setSelectedTypes({
      ...selectedTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const { land, water, hybrid } = selectedTypes;
  const handleSubmit = () => {
    const mapTypeSet = Object.keys(selectedTypes).reduce((acc, mapType) => {
      return selectedTypes[mapType] ? [...acc, mapType] : acc;
    }, []);

    const randomMapSet = mapData.filter((mapItem) => {
      return mapTypeSet.includes(mapItem.type);
    })

    const random = Math.floor(Math.random() * randomMapSet.length);

    setRandomMap(randomMapSet[random])
  }

  return (
    <Layout>
      <Seo title="Page two" />
      <Stack spacing={1}>
      <Typography variant="h4">
        Map Randomizer
      </Typography>
      <Stack direction="row" spacing={16} style={{alignItems: 'center'}}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Map Type</FormLabel>
          <RadioGroup
            row
            aria-label="map type"
            defaultValue="land"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Checkbox checked={land} onChange={handleChange} name={mapTypes.land} />}
              label="Land"
            />
            <FormControlLabel
              name={mapTypes.hybrid}
              control={<Checkbox checked={hybrid} onChange={handleChange} name={mapTypes.hybrid} />}
              label="Hybrid"
            />
            <FormControlLabel
              name={mapTypes.water}
              control={<Checkbox checked={water} onChange={handleChange} name={mapTypes.water} />}
              label="Water"
            />
          </RadioGroup>
        </FormControl>
        <Button disabled={!land && !water && !hybrid} variant="contained" onClick={handleSubmit}>
          Randomize!
        </Button>
        </Stack>
        {!!randomMap && <MapImage image={randomMap.image} name={randomMap.name} />}
      </Stack>
    </Layout>
  );
};

export default MapPage
