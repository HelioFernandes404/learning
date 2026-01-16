from sqlalchemy.orm import Session
from app.models.study_month import StudyMonth

class StudyMonthRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, title: str, number: int):
        month = StudyMonth(title=title, number=number)
        self.db.add(month)
        self.db.commit()
        self.db.refresh(month)
        return month

    def get_all(self):
        return self.db.query(StudyMonth).order_by(StudyMonth.number).all()

    def get_by_id(self, month_id: int):
        return self.db.query(StudyMonth).filter(StudyMonth.id == month_id).first()
