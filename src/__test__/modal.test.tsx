import { fireEvent, render } from '@testing-library/react'
import { Modal } from '../shared/Modal'

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn()

  // Act
  const { getByText } = render(
    <Modal onClose={handleClose}>
      <div>test</div>
    </Modal>
  )
  // Assert
  expect(getByText('test')).toBeTruthy()

  // Act
  fireEvent.click(getByText(/close/i))

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})
