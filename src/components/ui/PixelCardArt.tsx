// Card illustrations for the skills deck. Every rank in use has its own picture;
// all aces share the spade.
const IMAGES: Record<string, string> = {
  K: '/cards/king.png?v=3',
  Q: '/cards/queen.png?v=3',
  J: '/cards/jack.png?v=3',
  A: '/cards/ace.png?v=3',
  Joker: '/cards/joker.png?v=3',
};

interface Props {
  rank: string;
  suit: string;
  className?: string;
}

const PixelCardArt = ({ rank, suit, className }: Props) => (
  <img
    src={IMAGES[rank] ?? IMAGES.A}
    alt={`${rank} of ${suit}`}
    draggable={false}
    className={`${className ?? ''} object-contain select-none`}
  />
);

export default PixelCardArt;
