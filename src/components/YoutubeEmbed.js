import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ url }) => (
  <div className="video-responsive m-auto text-center">
    <iframe
      id="youtube-embed"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
