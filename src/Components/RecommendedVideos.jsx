import React from "react";
import FilterBar from "./FilterBar";
// import Cover from "./Cover";
import "./Recommended.css";
import Cover from "./Cover";
import VideoCard from "./VideoCard";
import News from "./News";

const RecommendedVideos = () => {
  return (
    <div className="recommended">
      <FilterBar />
      <Cover />
      <h2>Recommended</h2>
      <div className="recommendedVideo">
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
        <VideoCard
          title="New South Movie Hindi Dubbed"
          views="899K views"
          timestamp=" 2023"
          image="https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg"
          channelImage="https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg"
          channel="Raxam "
        />
        <VideoCard
          title="The Gen Z army fighting Myanmar's military dictator"
          views="664K views"
          timestamp="1 year ago"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Channel 4 News"
        />
        {/*  #  */}
        <VideoCard
          title=" EBS - Live Doubt Session"
          views="31 views"
          timestamp="2 months ago"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU"
          channelImage="EBSTech"
          channel="EBSTech"
        />

        <VideoCard
          title="Complete 11th PHYSICS in 1 Shot "
          views="6.7K"
          timestamp="1 year ago"
          image="https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp"
          channelImage=" Concepts + Most Important Questions | NEET 2023"
          channel="Physics Wallah - Alakh Pandey"
        />
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
        <VideoCard
          title=" EBS - Live Doubt Session"
          views="31 views"
          timestamp="2 months ago"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU"
          channelImage="EBSTech"
          channel="EBSTech"
        />

        <VideoCard
          title="Complete 11th PHYSICS in 1 Shot "
          views="6.7K"
          timestamp="1 year ago"
          image="https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp"
          channelImage=" Concepts + Most Important Questions | NEET 2023"
          channel="Physics Wallah - Alakh Pandey"
        />
        <VideoCard
          title="Games of Throne¬Every dragon scene¬Season 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623"
          channelImage="https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg"
          channel="Game of Thrones"
        />
      </div>
      <h2>Latest Youtube News</h2>
      <News />
    </div>
  );
};

export default RecommendedVideos;
