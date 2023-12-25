// import VideoCard from "./VideoCard";
// import "./styles.css";
import { Grid, Paper } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [search,setSearch]=useState("");

  useEffect(() => {
    let searchString =
            "https://content-xflix-backend.azurewebsites.net/v1/videos";
          if (search) {
            searchString = `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${search}`;
          }
         axios.get(searchString)
         .then((res)=>{
            console.log(res.data.videos);
            setVideos(res.data.videos);
         })
         .catch((e)=>console.log(e))
  }, [search]);

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        style={{
          marginBottom: 5
        }}
        onChange={(e) => {
          setSearch(e.target.value);
          
        }}
      />

      <Grid container direction="row" spacing={2}>
        {videos.map((value) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={value.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.previewImage}
                  alt={value.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.releaseDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
