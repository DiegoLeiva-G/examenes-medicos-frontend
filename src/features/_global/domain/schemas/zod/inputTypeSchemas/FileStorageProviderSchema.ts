import { z } from 'zod';

export const FileStorageProviderSchema = z.enum(['GoogleDrive', 'Cloudinary', 'Local', 'AwsS3']);

export type FileStorageProviderType = `${z.infer<typeof FileStorageProviderSchema>}`;

export default FileStorageProviderSchema;
