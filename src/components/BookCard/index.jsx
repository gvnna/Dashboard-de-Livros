import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function BookCard({ book }) {

  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
    : "/placeholder.png";

  return (
    <Card
      sx={{background:"#EDE8F5" }}
      className="hover:shadow-lg transition-shadow"
    >
      <CardActionArea>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "1.1rem",
            textAlign: "center",
            marginTop: 1,
            marginBottom: 0,
            color: "#708C82"
          }}
        >
         {book.title}
        </Typography>
        <div className="flex justify-center items-center">
          <CardMedia
            component="img"
            image={imageUrl}
            alt={`Capa do livro ${book.title}`}
             sx={{ height: "130px", width: "auto", maxWidth: "210px", objectFit: "cover" }}
          />
        </div>

        <CardContent>
          <Typography variant="body2" sx={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 300,
            fontSize: "0.55rem",
            textAlign: "center",
          }}>
            {book.author_name?.join(', ')} ({book.first_publish_year})
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}
