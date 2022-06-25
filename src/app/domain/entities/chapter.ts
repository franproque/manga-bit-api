import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export default class Chapter {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number

  @Column('varchar', { name: 'title' })
  title: string

  @Column('varchar', { name: 'manga_id' })
  manga_id: string

  @Column('varchar', { name: 'url' })
  url: string

  @Column('varchar', { name: 'number' })
  number: String

  @Column('integer', { name: 'sequence' })
  sequence: number

  @Column('date', { name: 'release_date', nullable: true })
  release_date: Date

  @Column('varchar', { name: 'status' })
  status: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
