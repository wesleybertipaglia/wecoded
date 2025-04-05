import { ReactNode } from "react";

interface ContainerProps {
  classList?: string;
  children: ReactNode;
}

const Container = ({ classList, children }: ContainerProps) => {
  return (
    <section className={classList}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default Container;
