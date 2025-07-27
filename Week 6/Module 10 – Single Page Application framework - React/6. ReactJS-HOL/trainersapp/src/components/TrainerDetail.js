import { useParams } from 'react-router-dom';
import TrainersMock from '../TrainersMock';

function TrainerDetail() {
    const { id } = useParams();
    const trainer = TrainersMock.find(t => t.trainerId === id);

    if (!trainer) return <p>Trainer not found</p>;

    return (
        <div>
            <h2>Trainers Details</h2>
            <h3><strong>{trainer.name}</strong> ({trainer.technology})</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <ul>
                {trainer.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrainerDetail;
