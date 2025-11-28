export const IMAGE_DIMENSIONS = {
  cardImage: { width: 400, height: 240 },
  heroImage: { width: 800, height: 500 },
  thumbnail: { width: 100, height: 100 },
  logo: { width: 36, height: 36 },
  topicIcon: { width: 28, height: 28 },
  categoryIcon: { width: 32, height: 32 },
};

export const getImageUrl = (path: string): string => {
  if (path.startsWith("http")) return path;
  return path;
};

export const getCardImageStyle = (imageUrl?: string) => ({
  backgroundImage: imageUrl ? `url(${imageUrl})` : `linear-gradient(135deg, #263247, #122131)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});
