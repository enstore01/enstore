"use client";

interface ShareButtonProps {
  title: string;
  description?: string;
}

const ShareButton = ({ title, description }: ShareButtonProps) => {
  const handleShare = async () => {
    try {
      await window.navigator.share({
        title,
        text: description,
        url: window.location.href,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleShare} className="text-navy hover:text-accent">
      Share
    </button>
  );
};

export default ShareButton;
