import { Button } from "./_components/atoms/button/Button";
import Icon from "./_components/atoms/icon/Icon";
import IconButton from "./_components/molecules/IconButton/IconButton";
import Header from "./_components/organisms/Header/Header";

export default function Home() {
  return (
    <>
      <Header
        description="Plan, prioritize, and accomplish your tasks with ease."
        rightSection={
          <>
            <IconButton leftSection={<Icon icon="add" />} size="lg">
              Add Project
            </IconButton>
            <Button variant="outline" size="lg">
              Import Data
            </Button>
          </>
        }
      >
        Dashboard
      </Header>
    </>
  );
}
