import axios from 'axios';
import Avatar from '~/assets/avatar.png';
import UpVoteIcon from '~/assets/up-vote.svg';
import DownVoteIcon from '~/assets/down-vote.svg';
import DividerIcon from '~/assets/divider.svg';
import timeSince from '~/utils/timeSince';
import showAlert from '~/utils/swal';

import styles from './styles.module.scss';
import CommentType from '~/types/CommentType';

type CommentProps = {
  comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => {
  const handleUpVote = () => {
    axios.post(`/comments/${comment.commentId}/vote/up`).then(() => {
      showAlert('Upvoted!', 'success');
    });
    // Component should be refetched and re-rendered with new score (ideally using websockets)
  };

  const handleDownVote = () => {
    axios.post(`/comments/${comment.commentId}/vote/down`).then(() => {
      showAlert('Downvoted!', 'success');
    });
    // Component should be refetched and re-rendered with new score (ideally using websockets)
  };

  const formatScore = (score: number) => (score > 0 ? `+${score}` : score);

  return (
    <article>
      <div className={styles.wrapper}>
        <img src={Avatar} className={styles.avatar} alt="" />
        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.author}>{comment.author}</span>
            <span className={styles.published}>
              {timeSince(new Date(comment.postedAt))}
            </span>
          </div>
          <p className={styles.content}>{comment.content}</p>
          <div className={styles.votes}>
            {formatScore(comment.score)}
            <img src={DividerIcon} alt="" />
            <button onClick={handleUpVote} className={styles.vote}>
              <img src={UpVoteIcon} alt="Upvote" />
            </button>
            <img src={DividerIcon} alt="" />
            <button onClick={handleDownVote} className={styles.vote}>
              <img src={DownVoteIcon} alt="Downvote" />
            </button>
            <img src={DividerIcon} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Comment;
