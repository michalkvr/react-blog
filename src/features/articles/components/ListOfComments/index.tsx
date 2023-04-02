import { FormEvent } from 'react';
import Comment from '../Comment';
import Avatar from '~/assets/avatar.png';
import Input from '~/features/ui/components/Input';

import styles from './styles.module.scss';
import CommentType from '~/types/CommentType';

type ListOfCommentsProps = {
  comments: CommentType[];
};

const ListOfComments = ({ comments }: ListOfCommentsProps) => {
  // NOTE:
  // I would create a new redux slice for comments and use it here
  // If there would be a lot of code, I would probably create separate feature for comments

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // The logic for submitting including controling the form via state and changeHandler
    // will be similar to the one in article form so i won't implement it here
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{`Comments (${comments.length})`}</h2>
        <form className={styles.form} action="submit" onSubmit={handleSubmit}>
          <img className={styles.avatar} src={Avatar} alt="" />
          <Input
            id="input-content"
            placeholder="Join the discussion"
            variant="large"
          />
        </form>
        {comments.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default ListOfComments;
