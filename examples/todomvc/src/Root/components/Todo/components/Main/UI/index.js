/**
 * Created by Homkai on 2016/11/5.
 */
import React from 'react';
import TodoItemUI from './TodoItem.ui';
import partial from 'lodash/partial';
import {FILTERS} from '../../../config';

export default ({todoList, editingIndex, filter, description, ...callbacks}) => {
	const {onToggleAll, onEdit, onSave, onRemove, onClear, onToggle} = callbacks;
	const activeNum = todoList.filter(item => !item.completed).length;

	return (
		<div>
			<section className="main">
				<input
					readOnly
					className="toggle-all"
					type="checkbox"
					checked={todoList.length && !activeNum}
					onClick={!todoList.length ? null : onToggleAll}
				/>
				<ul className="todo-list">
					{
						todoList.map((item, index) => {
							const hidden = filter === FILTERS.ACTIVE
								? item.completed
								: (filter === FILTERS.COMPLETED ? !item.completed : false);
							return (
								<TodoItemUI
									hidden={hidden}
									key={index}
									todo={item}
									editing={editingIndex === index}
									{...{
										onSave,
										onEdit: partial(onEdit, index),
										onRemove: partial(onRemove, index),
										onToggle: partial(onToggle, index)
									}}
								/>
							);
						})
					}
				</ul>
			</section>
			<footer className="footer">
				<span className="todo-count"><strong>{activeNum}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className={filter === FILTERS.ALL && 'selected'} href="#/Todo">All</a>
					</li>
					<li>
						<a className={filter === FILTERS.ACTIVE && 'selected'} href="#/Todo/active">Active</a>
					</li>
					<li>
						<a className={filter === FILTERS.COMPLETED && 'selected'} href="#/Todo/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={onClear}>Clear completed</button>
			</footer>
			<a href="https://github.com/homkai/deef/">{description}</a>
		</div>
	);
};
