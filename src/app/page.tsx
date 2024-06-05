import Image from "next/image";

const mockUrls = [
  'https://utfs.io/f/3be608cd-4fa5-448b-954a-ff444ea3e724-j9oiw5.png', 'https://utfs.io/f/6ef09fad-a96e-47f6-b07c-fb571bddf16f-twxjy7.jpg', 'https://utfs.io/f/053d2fc1-c624-47ba-8fa6-1bedaedc4354-g0rzom.jpg'
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))


export default function HomePage() {
  return (
    <div>
      <div className="flex flex-wrap">
        {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
