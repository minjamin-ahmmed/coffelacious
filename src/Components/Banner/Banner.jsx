import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div
        className="hero h-[500px] lg:min-h-screen my-10"
        style={{
          backgroundImage:`url(${bannerImg})`,borderRadius: "12px"
        }}>
      
      </div>
    );
};

export default Banner;