import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/service/login.service';


describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('#verifyLogin', function () {
    it('ao não receber um e-mail, retorne um erro', async function () {
      // Arrange
      const parameters = loginMock.noUsernameLoginBody;

      // Act
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });  
    })
  });

  it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
    // Arrange
    const parameters = loginMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
  });

  it('ao não receber uma senha, retorne um erro', async function () {
    // Arrange
    const parameters = loginMock.noPasswordLoginBody;

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });  
  });

  it('ao receber um user inexistente, retorne um erro', async function () {
    // Arrange
    const parameters = loginMock.notExistingUserBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: 'Username or password invalid' });
  });

  it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    // Arrange
    const parameters = loginMock.existingUserWithWrongPasswordBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: 'Username or password invalid' });  
  });
});
