import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Chapter from './chapter'

@Entity()
export default class Page {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number

  @ManyToOne((type) => Chapter, { eager: true })
  @JoinColumn({ name: 'chapter_id' })
  chapter_id: number

  @Column('integer', { name: 'page_number' })
  page_number: number

  @Column('varchar', { name: 'image_url' })
  image_url: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
