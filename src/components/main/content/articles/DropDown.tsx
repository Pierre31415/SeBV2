import React, { useEffect, useState } from "react";
import styles from "./Articles.module.scss";

type DropDownProps = {
  chapters: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  chapterSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  chapters,
  chapterSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the chapter name
   * back to the parent component
   *
   * @param chapter  The selected chapter
   */
  const onClickHandler = (chapter: string): void => {
    chapterSelection(chapter);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div
        className={
          showDropDown ? styles.dropdown : `${styles.dropdown} ${styles.active}`
        }
      >
        <div>
          <div className={styles.sommaireInside}>SOMMAIRE</div>
        </div>
        {chapters.map((chapter: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(chapter);
              }}
            >
              {chapter}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
