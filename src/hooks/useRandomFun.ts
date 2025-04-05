import { asciis, gifs, quotes } from "../fun";

type FunType = "ascii" | "gif";

interface RandomFun {
  quote: string;
  content: { type: FunType; value: string };
}

const getRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const useRandomFun = (): RandomFun => {
  const quote = getRandom(quotes);

  const contentType = getRandom<FunType>(["ascii", "gif"]);

  let value = "";

  switch (contentType) {
    case "ascii":
      value = getRandom(asciis);
      break;
    case "gif":
      value = getRandom(gifs);
      break;
  }

  return {
    quote,
    content: {
      type: contentType,
      value,
    },
  };
};

export default useRandomFun;
