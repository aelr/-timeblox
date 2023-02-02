import { createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useParams } from "solid-start";
import { StoriesMap } from "~/stories";
import { snakeToCamel, snakeToWords } from "~/utils";

const Story = () => {
  let ComponentStory = createMemo(() => {
    const params = useParams<{component: string, category: string, story: string}>();
    const storiesComponentName = snakeToCamel(params.component) as keyof typeof StoriesMap;
    const categoryName = snakeToWords(params.category);
    const storyName = snakeToWords(params.story);
    const storyPath = `${storiesComponentName}/${categoryName}/${storyName}`;
    console.log(`Rendering ${storyPath}`);
    const story = StoriesMap[storiesComponentName]?.[categoryName]?.[storyName];
    if (!story) throw new Error(`Story rendering failed for ${storyPath}. Are all words capitalized?`);
    return story;
  }); 

  return <Dynamic component={ComponentStory()}></Dynamic> 
};

export default Story;