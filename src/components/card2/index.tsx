import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

export default function CardItem2() {
  
  const [hearts, setHearts] = useState("");

  function mudarHeats(){
      hearts === "hearts" ? setHearts("") : setHearts("hearts");
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            RO
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="PS5 Pro"
        subheader="Março 11, 2025"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://files.tecnoblog.net/wp-content/uploads/2024/09/capa-ps5-pro-1-1060x596.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Prepare-se para viver uma nova era de jogos com o PlayStation 5, a máquina perfeita para os apaixonados por tecnologia e entretenimento. Com gráficos impressionantes, jogabilidade ultrarrápida e recursos imersivos, o PS5 é muito mais do que um console: é o coração do universo gamer!.
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={mudarHeats}>
          <FavoriteIcon className={` ${hearts}`} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
